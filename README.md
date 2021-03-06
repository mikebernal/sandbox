### SANBOX

This is my playground repository where I test and learn data structures and algorithm.

#### Table of Content

1. Tail Call
2. ES6 Set data structure
3. Removing published file or directory from GitHub


### Tail Call

Tail call calls and returns another function inside a parent function. This subroutine optimize memory as the recursion won't grow the stack.

### ES6 Set data structure

Set data structure stores only unique values in a container. This is useful if you want to get only a unique attributes from a collection like an array of objects from an API response. It uses the value as a key. 

### Removing files from remote repositories

![rm cached](rmcached.jpg)

---

**List< T >**
  
``List<T>`` is a collection of elements that can be referenced by index [n]. This type can grow and shrink enabling programmers to add or remove elements.
  
  See official docs at https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-5.0
  

### Fibonacci C#

**Using while loop**


<pre><code>
var sequence = new List<int> { 1, 1 };

while (sequence.Count < 20)
{
    var a = sequence[sequence.Count - 1];
    var b = sequence[sequence.Count - 2];

    sequence.Add(a + b);
}

foreach (var x in sequence)
{
    Console.WriteLine(x);
}
</code></pre>

---

                           
**Using for loop**         
             
<pre><code>             
var sequence = new List<int> {};

for (int i = 1; i <= 20; i++)
{
    if (i < 3)
    {
        sequence.Add(1);
    }
    else
    {
      var a = sequence[sequence.Count - 1];
      var b = sequence[sequence.Count - 2];

      sequence.Add(a + b);
    }
}

foreach(var x in sequence)
{
    Console.WriteLine(x);
}
</code></pre>

### LINQ Query
<pre><code>
using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
  public static void Main()
  {
    string[] names = { "Daquis", "Reyes", "Valdez", "Santiago", "Laure", "Madayag" };

    var linqNames = from name in names
                    where name.Contains('a')
                    select name;
    
    foreach(var name in linqNames)
    {
      Console.WriteLine(name);
    }
  }
}

</code></pre>

### NEXT JS

#### Inspecting static generation builds

![terminal information](terminal_output.png)

When the page is navigated in the browser:

First Load JS = Size + First Load JS shared by all

// First load JS green means performant application

// Hollow circle ○ means static generation - automatically rendered as static HTML and does not fetch any external data.

// Filled circle ● indicates SSG -  automatically generated as static HTML + JSON (uses getStaticProps)

### TSX

![terminal information](screen.png)

## SOLID PRINICIPLES

### Interface Segregation

https://dotnettutorials.net/lesson/interface-segregation-principle/


### VUE JS

#### Instanstiating component
<pre><code>
new Vue({
  el: '#app',
  data: {
    todoList: [{}, {}, {}]
  },
  methods: {
    handleChange: function() {
      const { name, value } = e.target;
      console.log(value);
    }
  }
});
</code></pre>

#### Templating

![template](template.png)

##### Vue template directives

// Event handlers
v-on:input="fn"

// Loops
v-for="item in items"

// Conditional rendering
v-if="awesome"
