#include <iostream>

 char * reverse(char* S);

 int main(){
     
     int size;
     std::cin >> size;
     
     char * str = new char [size];
     
     for(int i = 0; i < size; ++i){
         
         std::cin >> str[i];
     }
     std::cout << reverse(str);
     
     return 0;
 }
 
 char * reverse(char* S){
     
     int count = 0;
     
     while(S[count] != '\0'){
         
         count ++;
     }
     
     char * arr = new char [count];
     
     for(int i = count - 1, j = 0; i > 0, j < count; --i, ++j){
         
         arr[j] = S[i];
         
     }
     
     return arr;
 }



#include <iostream>
#include <utility>

using namespace std;


std::pair<int, int> foo1(int num1, int num2)
{
    
    return std::make_pair(num2, num1);            
}
  
int main()
{
    int a,b;
      
    pair<int, int> p = foo1(5,2);  
      
    cout << p.first << " " << p.second;
    return 0;
}


