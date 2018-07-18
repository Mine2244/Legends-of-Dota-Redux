--=======================================================================================
-- Generated by TypescriptToLua transpiler https://github.com/Perryvw/TypescriptToLua 
-- Date: Sun May 13 2018
--=======================================================================================
require("typescript_lualib")

modifier_random_lane_creep_spawner_mutator = {}
modifier_random_lane_creep_spawner_mutator.__index = modifier_random_lane_creep_spawner_mutator
function modifier_random_lane_creep_spawner_mutator.new(construct, ...)
    local instance = setmetatable({}, modifier_random_lane_creep_spawner_mutator)
    if construct and modifier_random_lane_creep_spawner_mutator.constructor then modifier_random_lane_creep_spawner_mutator.constructor(instance, ...) end
    return instance
end
function modifier_random_lane_creep_spawner_mutator.IsPermanent(self)
    return true
end
function modifier_random_lane_creep_spawner_mutator.IsPurgable(self)
    return false
end
function modifier_random_lane_creep_spawner_mutator.IsHidden(self)
    return true
end
function modifier_random_lane_creep_spawner_mutator:OnCreated()
    if IsServer() then
        self:StartIntervalThink(1)
        self.maxSpawn = 2
        self.minSpawn = 1
        print("modifier_random_lane_creep_spawner_mutator")

        self.units = {
            "npc_dota_neutral_redux_centaur_khan",
            "npc_dota_neutral_redux_polar_furbolg_ursa_warrior",
            "npc_dota_neutral_redux_alpha_wolf",
            "npc_dota_neutral_redux_enraged_wildkin",
            "npc_dota_neutral_redux_satyr_soulstealer",
            "npc_dota_neutral_redux_satyr_hellcaller",
            "npc_dota_neutral_redux_satyr_trickster",
            "npc_dota_neutral_redux_dark_troll_warlord",
            "npc_dota_neutral_redux_black_dragon",
            "npc_dota_neutral_redux_black_drake",
            "npc_dota_neutral_redux_harpy_storm",
            "npc_dota_neutral_redux_harpy_scout",
            "npc_dota_neutral_redux_forest_troll_high_priest",
            "npc_dota_neutral_redux_forest_troll_berserker",
            "npc_dota_neutral_redux_dark_troll",
            "npc_dota_wraith_ghost",
            "npc_dota_neutral_redux_ghost",
            "npc_dota_neutral_redux_gnoll_assassin",
            "npc_dota_neutral_redux_small_thunder_lizard",
            "npc_dota_neutral_redux_big_thunder_lizard",
            "npc_dota_neutral_redux_granite_golem",
            "npc_dota_neutral_redux_rock_golem",
            "npc_dota_neutral_redux_prowler_shaman",
            "npc_dota_neutral_redux_prowler_acolyte",
            --"npc_dota_neutral_redux_elder_jungle_stalker",
            --"npc_dota_neutral_redux_jungle_stalker",
            "npc_dota_neutral_redux_giant_wolf",
            "npc_dota_neutral_redux_ogre_magi",
            "npc_dota_neutral_redux_ogre_mauler",
            "npc_dota_neutral_redux_mud_golem",
            "npc_dota_neutral_redux_polar_furbolg_champion",
            "npc_dota_neutral_redux_fel_beast",
            "npc_dota_neutral_redux_centaur_outrunner",
            "npc_dota_neutral_redux_kobold_taskmaster",
            "npc_dota_neutral_redux_kobold_tunneler",
            "npc_dota_neutral_redux_kobold",


        }

        ListenToGameEvent('npc_spawned',function(keys)
            local u = EntIndexToHScript(keys.entindex)
            if u and IsValidEntity(u) then
                if string.find(u:GetUnitName(),"goodguys_ranged") or string.find(u:GetUnitName(),"badguys_ranged") then

                    local spawnCount = 0
                    while spawnCount < self.minSpawn or self.maxSpawn >= spawnCount and RollPercentage(50)  do
                        spawnCount = spawnCount + 1
                        local rnd = RandomInt(1,#self.units)
                        local name = self.units[rnd]
                        local origin = u:GetAbsOrigin()
                        local teamNumber = u:GetTeamNumber()
                        
                        
                        -- Freeze and hide them until time reaches .30 or .60

                        local waitTime = 30-math.floor(GameRules:GetDOTATime(false,false)%30)
                        if waitTime > 28 then
                            waitTime = FrameTime()
                        end
                        
                        --unit:AddNewModifier(unit,nil,"modifier_random_lane_creep_freeze",{duration = waitTime+1})
                        Timers:CreateTimer(waitTime+2,function()
                            local unit = CreateUnitByName(name,origin,true,nil,nil,teamNumber)
                            --unit:MoveToPositionAggressive(Vector(0,0,0))
                            local waypoint = u:GetInitialGoalEntity()
                            unit:SetInitialGoalEntity(waypoint)
                            
                            unit:AddNewModifier(unit,nil,"modifier_random_lane_creep_mutator_ai",{})
                            unit:AddNewModifier(unit,nil,"modifier_phased",{duration = 2.5})
                            
                            

                            ResolveNPCPositions(unit:GetAbsOrigin(),100)
                            
                        end)

                        
                    end
                end
            end
        end, nil)   
    end
end

function modifier_random_lane_creep_spawner_mutator:OnIntervalThink()
    --print(GameRules:GetDOTATime(false,false),math.floor(GameRules:GetDOTATime(false,false)%30)==0)

    --if GameRules:GetDOTATime(false,false) > 5 and math.floor(GameRules:GetDOTATime(false,false)%30)==0 then
    
end


modifier_random_lane_creep_mutator_ai = class({})
function modifier_random_lane_creep_mutator_ai.IsPermanent(self)
    return true
end
function modifier_random_lane_creep_mutator_ai.IsPurgable(self)
    return false
end
function modifier_random_lane_creep_mutator_ai.IsHidden(self)
    return true
end

function modifier_random_lane_creep_mutator_ai.OnCreated(self,kv)
    if IsClient() then
        return
    end


    --self.unit = EntIndexToHScript(kv.unit)
    local unit = self:GetParent()
    self.initPos = unit:GetAbsOrigin()

    for i=0,3 do
        local ability = unit:GetAbilityByIndex(i)
        if ability then
            ability:SetLevel(1)
        end
    end
    unit:SetMana(unit:GetMaxMana())
    self:StartIntervalThink(FrameTime())
end

function modifier_random_lane_creep_mutator_ai.OnIntervalThink(self)
    local unit = self:GetParent()
    if self:GetElapsedTime() > 2.5 and self:GetElapsedTime() < 2.75 and ((unit:GetAbsOrigin()-self.initPos):Length2D()< 50) then
        print("UNIT WS STUCK",unit:GetLastAttackTime())
        UTIL_Remove(unit)
        return
    end
    -- if self.unit and not self.unit:IsNull() then
    --     unit:MoveToPositionAggressive(self.unit:GetAbsOrigin())
    --     print(self.unit:GetInitialGoalEntity())
    --     unit:SetInitialGoalEntity(self.unit:GetInitialGoalEntity())
    -- end

    --[[if not unit:GetInitialGoalEntity() then
        local units = FindUnitsInRadius(unit:GetTeamNumber(),unit:GetAbsOrigin(),nil,500,DOTA_UNIT_TARGET_TEAM_FRIENDLY,DOTA_UNIT_TARGET_BASIC,DOTA_UNIT_TARGET_FLAG_NONE,FIND_ANY_ORDER,false)
        for _,u in pairs(units) do
            --print(u:GetUnitName(),u:GetInitialGoalEntity())
            if u:GetInitialGoalEntity() then
                unit:SetInitialGoalEntity(u:GetInitialGoalEntity())
            end
        end
    else
        --print("YEAH",unit:GetInitialGoalEntity())
    end]]
    for i=0,3 do
        local ability = unit:GetAbilityByIndex(i)
        if unit:GetCurrentActiveAbility() then return end
        if ability and not ability:IsPassive() and ability:IsCooldownReady() and unit:GetMana() >= ability:GetManaCost(-1) then
            if ability:GetAbilityName() == "dark_troll_warlord_raise_dead" and unit:IsAttacking() then
                ability:CastAbility()
                return
            end

            if ability:GetAbilityName() == "enraged_wildkin_tornado" then 
                return 
            end
            -- Cast stomps
            if ability:GetCastRange(unit:GetAbsOrigin(),nil) < 50 then
                local units = FindUnitsInRadius(unit:GetTeamNumber(),unit:GetAbsOrigin(),nil,ability:GetSpecialValueFor("radius"),ability:GetAbilityTargetTeam(),DOTA_UNIT_TARGET_HERO,DOTA_UNIT_TARGET_FLAG_NO_INVIS + DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE ,FIND_ANY_ORDER,false)
                if #units > 0 then
                    ability:CastAbility()
                    ability:StartCooldown(ability:GetCooldown(-1))
                    unit:SpendMana(ability:GetManaCost(-1),ability)
                    --unit:CastAbilityNoTarget(ability,-1)
                    return
                end
            end
            
            local units = FindUnitsInRadius(unit:GetTeamNumber(),unit:GetAbsOrigin(),nil,ability:GetCastRange(unit:GetAbsOrigin(),nil),DOTA_UNIT_TARGET_TEAM_ENEMY,DOTA_UNIT_TARGET_HERO,DOTA_UNIT_TARGET_FLAG_NONE,FIND_CLOSEST ,false)
            
            if #units > 0 then
                unit:SetCursorCastTarget(units[1])
                ability:CastAbility()
                ability:StartCooldown(ability:GetCooldown(-1))
                unit:SpendMana(ability:GetManaCost(-1),ability)
                --unit:CastAbilityOnTarget(units[1],ability,-1)
                return
            end
        end
    end
    --unit:MoveToPositionAggressive(Vector(0,0,0))
end





modifier_random_lane_creep_freeze = class({})

function modifier_random_lane_creep_freeze.IsPermanent(self)
    return true
end
function modifier_random_lane_creep_freeze.IsPurgable(self)
    return false
end
function modifier_random_lane_creep_freeze.IsHidden(self)
    return true
end

function modifier_random_lane_creep_freeze:CheckState()
    return {
        [MODIFIER_STATE_NO_HEALTH_BAR] = true,
        [MODIFIER_STATE_OUT_OF_GAME  ] = true,
        [MODIFIER_STATE_STUNNED      ] = true,
        [MODIFIER_STATE_INVISIBLE    ] = true,
        [MODIFIER_STATE_TRUESIGHT_IMMUNE] = true,
        [MODIFIER_STATE_INVULNERABLE ] = true,
    }
end

function modifier_random_lane_creep_freeze:OnCreated()
    if IsClient() then return end
    elf:GetParent():AddNoDraw()
end

function modifier_random_lane_creep_freeze:OnDestroy()
    if IsClient() then return end
    self:GetParent():RemoveNoDraw()
    local unit = self:GetParent()
    
end