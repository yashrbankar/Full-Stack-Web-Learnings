#include <bits/stdc++.h>
using namespace std;

const int N=1e5+10;
int height[N],depth[N];
vector<int>g[N];

void dfs(int vertex , int par=0)
{
    //!take action on the vertex after entering the vertex
    for(int child:g[vertex])
    {
        if(child==par) continue;
        height[par]=height[child]+1;
        //!take action on child before entering the child node
        dfs(child);
        depth[par]=max(depth[par],depth[par]+1);
        //!take action on child after exiting the child node
    }
    //!take action on the vertex before exiting the vertex
}
int main()
{
    int n;
    cin>>n;
    for(int i=0;i<n-1;i++)
    {
        int x,y;
        cin>>x>>y;
        g[x].push_back(y);
        g[y].push_back(x);
    }
    dfs(1);

    for(int i=0;i<n;i++)
    {
        cout<<height[i]<<" "<<depth[i]<<endl;
    }

    return 0;
}