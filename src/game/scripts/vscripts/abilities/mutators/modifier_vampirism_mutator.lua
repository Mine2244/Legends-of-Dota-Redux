--=======================================================================================
-- Generated by TypescriptToLua transpiler https://github.com/Perryvw/TypescriptToLua 
-- Date: Sun May 13 2018
--=======================================================================================
require("typescript_lualib")
--LinkLuaModifier("modifier_vampirism_mutator","abilities/mutators/modifier_vampirism_mutator.lua",LUA_MODIFIER_MOTION_NONE)
modifier_vampirism_mutator = {}
modifier_vampirism_mutator.__index = modifier_vampirism_mutator
function modifier_vampirism_mutator.new(construct, ...)
    local instance = setmetatable({}, modifier_vampirism_mutator)
    if construct and modifier_vampirism_mutator.constructor then modifier_vampirism_mutator.constructor(instance, ...) end
    return instance
end
function modifier_vampirism_mutator.IsPermanent(self)
    return true
end
function modifier_vampirism_mutator.IsPurgable(self)
    return false
end

function modifier_vampirism_mutator.GetTexture(self)
    return "custom/modifier_vampirism_mutator"
end

function modifier_vampirism_mutator.OnCreated(self)
    self.daytime_hp_drain=1
    self.night_lifesteal=20
    self.night_bonus_ms = 10
    self.night_mana_regen = 1

    if IsServer() then
        self:StartIntervalThink(FrameTime())
    end
end

function modifier_vampirism_mutator.OnIntervalThink(self)
    self.dayTime = GameRules:IsDaytime()
    self.oldDayTime = self.oldDayTime or self.dayTime

    if self.dayTime ~= self.oldDayTime then
        if self.dayTime == false then
            Notifications:Top(self:GetParent():GetPlayerOwner(),{text="THE NIGHT HAS COME!",duration = 5})
        else
            Notifications:Top(self:GetParent():GetPlayerOwner(),{text="THE NIGHT IS OVER!",duration = 5})
        end
    end
    self.oldDayTime = self.dayTime

end

function modifier_vampirism_mutator.DeclareFunctions(self)
    return {
        MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE,
        MODIFIER_EVENT_ON_TAKEDAMAGE,
        MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE,
        MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE,  
    }
end

function modifier_vampirism_mutator.GetModifierMoveSpeedBonus_Percentage(self)
    if IsClient() then
        return 0
    end
    if GameRules:IsDaytime() then
        return 0
    end
    return self.night_bonus_ms
end

function modifier_vampirism_mutator.GetModifierHealthRegenPercentage(self)
    if IsClient() then
        return 0
    end
    if GameRules:IsDaytime() then
        return -1
    end
    return 1
end

function modifier_vampirism_mutator.GetModifierTotalPercentageManaRegen(self)
    if IsClient() then
        return 0
    end
    if GameRules:IsDaytime() then
        return 0
    end
    return 1
end

function modifier_vampirism_mutator.OnTakeDamage(self,kv)
    if GameRules:IsDaytime() then
        return
    end
    local damage_flags = kv.damage_flags
    
    if bit.band(damage_flags, DOTA_DAMAGE_FLAG_HPLOSS) == DOTA_DAMAGE_FLAG_HPLOSS then
        return 
    end
    if bit.band(damage_flags, DOTA_DAMAGE_FLAG_REFLECTION) == DOTA_DAMAGE_FLAG_REFLECTION then
        return 
    end

    self.night_lifesteal = self.night_lifesteal or 20
    if (self:GetParent()==kv.attacker) and kv.target:IsAlive() then
        if not kv.target:IsOther() and not kv.target:IsBuilding() then
            self:GetParent():Heal((kv.damage*self.night_lifesteal)*0.01,self:GetParent())
            local p
            if not kv.ability then
                p = ParticleManager:CreateParticle("particles/generic_gameplay/generic_lifesteal.vpcf",PATTACH_OVERHEAD_FOLLOW,self:GetParent())
            else
                p = ParticleManager:CreateParticle("particles/items3_fx/octarine_core_lifesteal.vpcf", PATTACH_ABSORIGIN, self:GetParent())
            end
            ParticleManager:ReleaseParticleIndex(p)

        end
    end
end
