class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(); // Armazena o número e o seu índice: valor -> índice

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]; // O número que falta para atingir o alvo

            // Se o complemento já foi visto, retornamos os índices
            if (map.has(complement)) {
                return [map.get(complement), i];
            }

            // Caso contrário, salvamos o número atual e seu índice no mapa
            map.set(nums[i], i);
        }

        return [];
    }
}
