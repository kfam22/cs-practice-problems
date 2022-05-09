function numWays(s) {
     n = s.length();
     ans = 0;
    for(let i = 1; i < n - 1 ;i++){
        for( j = i + 1;j < n;j++){
             s1=s.substring(0,i);
             s2=s.substring(i,j);
             s3=s.substring(j,n);
            if(!(s1+s2).equals(s2+s3) && !(s2+s3).equals(s3+s1) && !(s1+s2).equals(s3+s1))
                ans++;
        }
    }
    return ans;
}