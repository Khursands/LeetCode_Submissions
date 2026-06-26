function lengthOfLongestSubstring(s) {
    const seen = new Set()
    let left = 0
    let maxLength = 0
    for(let right=0; right<s.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++;
        }
        seen.add(s[right])
        maxLength = Math.max(maxLength , right - left + 1)
    }

    return maxLength;
}

// Exported for the Jest test-suite; ignored by the LeetCode judge.
if (typeof module !== 'undefined') module.exports = lengthOfLongestSubstring;