class Solution {
    /**
     * @param {string} cleaned
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let l = 0;
        let r = cleaned.length - 1;

        while (l < r) {
            if (cleaned[l] !== cleaned[r]) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
