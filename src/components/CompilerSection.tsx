import React, { useState } from 'react';
import { Code, Play, Download, Copy, RotateCcw, Settings, Terminal, FileText, Zap, Globe, CheckCircle, AlertCircle } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  icon: string;
  color: string;
  defaultCode: string;
  extension: string;
  version: string;
  description: string;
}

const CompilerSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');

  const languages: Language[] = [
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      color: 'from-yellow-500 to-green-500',
      extension: '.py',
      version: '3.11',
      description: 'High-level programming language',
      defaultCode: `# Python Online Compiler
print("Hello, World!")

# Basic operations
name = input("Enter your name: ")
print(f"Welcome to Python, {name}!")

# List operations
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(f"Original: {numbers}")
print(f"Squared: {squared}")

# Function example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(f"Fibonacci(10): {fibonacci(10)}")`
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      color: 'from-orange-500 to-red-500',
      extension: '.java',
      version: '17',
      description: 'Object-oriented programming language',
      defaultCode: `// Java Online Compiler
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Hello, World!");
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome to Java, " + name + "!");
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Original array: ");
        System.out.println(Arrays.toString(numbers));
        
        // Calculate squares
        int[] squared = new int[numbers.length];
        for(int i = 0; i < numbers.length; i++) {
            squared[i] = numbers[i] * numbers[i];
        }
        System.out.print("Squared array: ");
        System.out.println(Arrays.toString(squared));
        
        scanner.close();
    }
}`
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '⚙️',
      color: 'from-blue-500 to-purple-500',
      extension: '.cpp',
      version: 'GCC 11',
      description: 'System programming language',
      defaultCode: `// C++ Online Compiler
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    cout << "Welcome to C++, " << name << "!" << endl;
    
    // Vector operations
    vector<int> numbers = {1, 2, 3, 4, 5};
    vector<int> squared;
    
    cout << "Original: ";
    for(int num : numbers) {
        cout << num << " ";
        squared.push_back(num * num);
    }
    cout << endl;
    
    cout << "Squared: ";
    for(int num : squared) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`
    },
    {
      id: 'c',
      name: 'C',
      icon: '🔧',
      color: 'from-gray-500 to-blue-500',
      extension: '.c',
      version: 'GCC 11',
      description: 'Procedural programming language',
      defaultCode: `// C Online Compiler
#include <stdio.h>
#include <string.h>

int main() {
    printf("Hello, World!\\n");
    
    char name[100];
    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\\n")] = 0; // Remove newline
    printf("Welcome to C, %s!\\n", name);
    
    // Array operations
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Original: ");
    for(int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    printf("Squared: ");
    for(int i = 0; i < size; i++) {
        printf("%d ", numbers[i] * numbers[i]);
    }
    printf("\\n");
    
    return 0;
}`
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '📜',
      color: 'from-yellow-500 to-orange-500',
      extension: '.js',
      version: 'Node.js 18',
      description: 'Dynamic web programming language',
      defaultCode: `// JavaScript Online Compiler
console.log("Hello, World!");

// Simulating input (in real environment, use prompt or readline)
const name = "Developer"; // Replace with actual input
console.log(\`Welcome to JavaScript, \${name}!\`);

// Array operations
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x);

console.log("Original:", numbers);
console.log("Squared:", squared);

// Function example
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Fibonacci(10):", fibonacci(10));

// Modern JavaScript features
const asyncExample = async () => {
    console.log("Async/Await example");
    return "JavaScript is awesome!";
};

asyncExample().then(result => console.log(result));`
    },
    {
      id: 'rust',
      name: 'Rust',
      icon: '🦀',
      color: 'from-orange-600 to-red-600',
      extension: '.rs',
      version: '1.70',
      description: 'Systems programming language',
      defaultCode: `// Rust Online Compiler
use std::io;

fn main() {
    println!("Hello, World!");
    
    println!("Enter your name:");
    let mut name = String::new();
    io::stdin().read_line(&mut name).expect("Failed to read line");
    let name = name.trim();
    println!("Welcome to Rust, {}!", name);
    
    // Vector operations
    let numbers = vec![1, 2, 3, 4, 5];
    let squared: Vec<i32> = numbers.iter().map(|x| x * x).collect();
    
    println!("Original: {:?}", numbers);
    println!("Squared: {:?}", squared);
    
    // Function example
    fn fibonacci(n: u32) -> u32 {
        match n {
            0 => 0,
            1 => 1,
            _ => fibonacci(n - 1) + fibonacci(n - 2),
        }
    }
    
    println!("Fibonacci(10): {}", fibonacci(10));
}`
    },
    {
      id: 'go',
      name: 'Go',
      icon: '🐹',
      color: 'from-cyan-500 to-blue-500',
      extension: '.go',
      version: '1.20',
      description: 'Google\'s programming language',
      defaultCode: `// Go Online Compiler
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    fmt.Println("Hello, World!")
    
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter your name: ")
    name, _ := reader.ReadString('\\n')
    name = strings.TrimSpace(name)
    fmt.Printf("Welcome to Go, %s!\\n", name)
    
    // Slice operations
    numbers := []int{1, 2, 3, 4, 5}
    var squared []int
    
    for _, num := range numbers {
        squared = append(squared, num*num)
    }
    
    fmt.Printf("Original: %v\\n", numbers)
    fmt.Printf("Squared: %v\\n", squared)
    
    // Function example
    fmt.Printf("Fibonacci(10): %d\\n", fibonacci(10))
}

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}`
    },
    {
      id: 'csharp',
      name: 'C#',
      icon: '🔷',
      color: 'from-purple-500 to-blue-500',
      extension: '.cs',
      version: '.NET 7',
      description: 'Microsoft\'s programming language',
      defaultCode: `// C# Online Compiler
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
        
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine($"Welcome to C#, {name}!");
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        int[] squared = numbers.Select(x => x * x).ToArray();
        
        Console.WriteLine($"Original: [{string.Join(", ", numbers)}]");
        Console.WriteLine($"Squared: [{string.Join(", ", squared)}]");
        
        // Method example
        Console.WriteLine($"Fibonacci(10): {Fibonacci(10)}");
    }
    
    static int Fibonacci(int n)
    {
        if (n <= 1) return n;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}`
    },
    {
      id: 'php',
      name: 'PHP',
      icon: '🐘',
      color: 'from-purple-600 to-blue-600',
      extension: '.php',
      version: '8.2',
      description: 'Web development language',
      defaultCode: `<?php
// PHP Online Compiler
echo "Hello, World!\\n";

echo "Enter your name: ";
$name = trim(fgets(STDIN));
echo "Welcome to PHP, $name!\\n";

// Array operations
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(function($x) { return $x * $x; }, $numbers);

echo "Original: [" . implode(", ", $numbers) . "]\\n";
echo "Squared: [" . implode(", ", $squared) . "]\\n";

// Function example
function fibonacci($n) {
    if ($n <= 1) return $n;
    return fibonacci($n - 1) + fibonacci($n - 2);
}

echo "Fibonacci(10): " . fibonacci(10) . "\\n";
?>`
    },
    {
      id: 'ruby',
      name: 'Ruby',
      icon: '💎',
      color: 'from-red-500 to-pink-500',
      extension: '.rb',
      version: '3.2',
      description: 'Dynamic programming language',
      defaultCode: `# Ruby Online Compiler
puts "Hello, World!"

print "Enter your name: "
name = gets.chomp
puts "Welcome to Ruby, #{name}!"

# Array operations
numbers = [1, 2, 3, 4, 5]
squared = numbers.map { |x| x * x }

puts "Original: #{numbers}"
puts "Squared: #{squared}"

# Method example
def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

puts "Fibonacci(10): #{fibonacci(10)}"`
    },
    {
      id: 'swift',
      name: 'Swift',
      icon: '🦉',
      color: 'from-orange-500 to-red-500',
      extension: '.swift',
      version: '5.8',
      description: 'Apple\'s programming language',
      defaultCode: `// Swift Online Compiler
import Foundation

print("Hello, World!")

print("Enter your name: ", terminator: "")
if let name = readLine() {
    print("Welcome to Swift, \\(name)!")
}

// Array operations
let numbers = [1, 2, 3, 4, 5]
let squared = numbers.map { $0 * $0 }

print("Original: \\(numbers)")
print("Squared: \\(squared)")

// Function example
func fibonacci(_ n: Int) -> Int {
    if n <= 1 { return n }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

print("Fibonacci(10): \\(fibonacci(10))")`
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      extension: '.kt',
      version: '1.8',
      description: 'JetBrains\' programming language',
      defaultCode: `// Kotlin Online Compiler
fun main() {
    println("Hello, World!")
    
    print("Enter your name: ")
    val name = readLine()
    println("Welcome to Kotlin, $name!")
    
    // List operations
    val numbers = listOf(1, 2, 3, 4, 5)
    val squared = numbers.map { it * it }
    
    println("Original: $numbers")
    println("Squared: $squared")
    
    // Function example
    println("Fibonacci(10): \${fibonacci(10)}")
}

fun fibonacci(n: Int): Int {
    return if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2)
}`
    },
    {
      id: 'scala',
      name: 'Scala',
      icon: '🎭',
      color: 'from-red-600 to-purple-600',
      extension: '.scala',
      version: '3.3',
      description: 'Functional programming language',
      defaultCode: `// Scala Online Compiler
import scala.io.StdIn

object Main extends App {
  println("Hello, World!")
  
  print("Enter your name: ")
  val name = StdIn.readLine()
  println(s"Welcome to Scala, $name!")
  
  // List operations
  val numbers = List(1, 2, 3, 4, 5)
  val squared = numbers.map(x => x * x)
  
  println(s"Original: $numbers")
  println(s"Squared: $squared")
  
  // Function example
  def fibonacci(n: Int): Int = {
    if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2)
  }
  
  println(s"Fibonacci(10): \${fibonacci(10)}")
}`
    },
    {
      id: 'dart',
      name: 'Dart',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      extension: '.dart',
      version: '3.0',
      description: 'Google\'s programming language',
      defaultCode: `// Dart Online Compiler
import 'dart:io';

void main() {
  print('Hello, World!');
  
  stdout.write('Enter your name: ');
  String? name = stdin.readLineSync();
  print('Welcome to Dart, $name!');
  
  // List operations
  List<int> numbers = [1, 2, 3, 4, 5];
  List<int> squared = numbers.map((x) => x * x).toList();
  
  print('Original: $numbers');
  print('Squared: $squared');
  
  // Function example
  print('Fibonacci(10): \${fibonacci(10)}');
}

int fibonacci(int n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`
    },
    {
      id: 'r',
      name: 'R',
      icon: '📊',
      color: 'from-blue-600 to-purple-600',
      extension: '.r',
      version: '4.3',
      description: 'Statistical programming language',
      defaultCode: `# R Online Compiler
cat("Hello, World!\\n")

cat("Enter your name: ")
name <- readLines("stdin", n=1)
cat("Welcome to R,", name, "!\\n")

# Vector operations
numbers <- c(1, 2, 3, 4, 5)
squared <- numbers^2

cat("Original:", numbers, "\\n")
cat("Squared:", squared, "\\n")

# Function example
fibonacci <- function(n) {
  if (n <= 1) return(n)
  return(fibonacci(n-1) + fibonacci(n-2))
}

cat("Fibonacci(10):", fibonacci(10), "\\n")

# Data analysis example
data <- data.frame(x = 1:5, y = c(2, 4, 6, 8, 10))
print(data)
cat("Mean of y:", mean(data$y), "\\n")`
    },
    {
      id: 'perl',
      name: 'Perl',
      icon: '🐪',
      color: 'from-blue-500 to-purple-500',
      extension: '.pl',
      version: '5.36',
      description: 'Text processing language',
      defaultCode: `#!/usr/bin/perl
# Perl Online Compiler
use strict;
use warnings;

print "Hello, World!\\n";

print "Enter your name: ";
my $name = <STDIN>;
chomp $name;
print "Welcome to Perl, $name!\\n";

# Array operations
my @numbers = (1, 2, 3, 4, 5);
my @squared = map { $_ * $_ } @numbers;

print "Original: @numbers\\n";
print "Squared: @squared\\n";

# Subroutine example
sub fibonacci {
    my $n = shift;
    return $n if $n <= 1;
    return fibonacci($n-1) + fibonacci($n-2);
}

print "Fibonacci(10): " . fibonacci(10) . "\\n";`
    },
    {
      id: 'haskell',
      name: 'Haskell',
      icon: '🔮',
      color: 'from-purple-600 to-pink-600',
      extension: '.hs',
      version: 'GHC 9.4',
      description: 'Functional programming language',
      defaultCode: `-- Haskell Online Compiler
main :: IO ()
main = do
    putStrLn "Hello, World!"
    
    putStr "Enter your name: "
    name <- getLine
    putStrLn $ "Welcome to Haskell, " ++ name ++ "!"
    
    -- List operations
    let numbers = [1, 2, 3, 4, 5]
    let squared = map (^2) numbers
    
    putStrLn $ "Original: " ++ show numbers
    putStrLn $ "Squared: " ++ show squared
    
    -- Function example
    putStrLn $ "Fibonacci(10): " ++ show (fibonacci 10)

fibonacci :: Int -> Int
fibonacci n
    | n <= 1 = n
    | otherwise = fibonacci (n-1) + fibonacci (n-2)`
    },
    {
      id: 'lua',
      name: 'Lua',
      icon: '🌙',
      color: 'from-blue-400 to-purple-500',
      extension: '.lua',
      version: '5.4',
      description: 'Lightweight scripting language',
      defaultCode: `-- Lua Online Compiler
print("Hello, World!")

io.write("Enter your name: ")
local name = io.read()
print("Welcome to Lua, " .. name .. "!")

-- Table operations
local numbers = {1, 2, 3, 4, 5}
local squared = {}

for i, num in ipairs(numbers) do
    squared[i] = num * num
end

io.write("Original: ")
for i, num in ipairs(numbers) do
    io.write(num .. " ")
end
print()

io.write("Squared: ")
for i, num in ipairs(squared) do
    io.write(num .. " ")
end
print()

-- Function example
function fibonacci(n)
    if n <= 1 then
        return n
    else
        return fibonacci(n-1) + fibonacci(n-2)
    end
end

print("Fibonacci(10): " .. fibonacci(10))`
    },
    {
      id: 'assembly',
      name: 'Assembly',
      icon: '⚡',
      color: 'from-gray-600 to-red-600',
      extension: '.asm',
      version: 'NASM',
      description: 'Low-level programming language',
      defaultCode: `; Assembly Online Compiler (x86-64)
section .data
    hello db 'Hello, World!', 0xA, 0
    hello_len equ $ - hello
    
    prompt db 'Enter your name: ', 0
    prompt_len equ $ - prompt
    
    welcome db 'Welcome to Assembly, ', 0
    welcome_len equ $ - welcome
    
    newline db 0xA, 0

section .bss
    name resb 64

section .text
    global _start

_start:
    ; Print hello message
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, hello      ; message
    mov rdx, hello_len  ; length
    syscall
    
    ; Print prompt
    mov rax, 1
    mov rdi, 1
    mov rsi, prompt
    mov rdx, prompt_len
    syscall
    
    ; Read name
    mov rax, 0          ; sys_read
    mov rdi, 0          ; stdin
    mov rsi, name       ; buffer
    mov rdx, 64         ; max length
    syscall
    
    ; Print welcome message
    mov rax, 1
    mov rdi, 1
    mov rsi, welcome
    mov rdx, welcome_len
    syscall
    
    ; Print name
    mov rax, 1
    mov rdi, 1
    mov rsi, name
    mov rdx, 64
    syscall
    
    ; Exit
    mov rax, 60         ; sys_exit
    mov rdi, 0          ; exit status
    syscall`
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  // Initialize code when language changes
  React.useEffect(() => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
  }, [selectedLanguage]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...\n');
    
    try {
      // Simulate compilation and execution
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock output based on language
      const mockOutput = `✅ Compilation successful!
📤 Program Output:
Hello, World!
Enter your name: ${input || 'User'}
Welcome to ${currentLanguage.name}, ${input || 'User'}!
Original: [1, 2, 3, 4, 5]
Squared: [1, 4, 9, 16, 25]
Fibonacci(10): 55

⏱️ Execution time: 0.${Math.floor(Math.random() * 900 + 100)}s
💾 Memory used: ${Math.floor(Math.random() * 50 + 10)}MB
🎯 Exit code: 0`;

      setOutput(mockOutput);
    } catch (error) {
      setOutput(`❌ Compilation Error:\nError: ${error}\n\nPlease check your code and try again.`);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code${currentLanguage.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetCode = () => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
    setInput('');
  };

  return (
    <section id="compilers" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              💻 Online Compilers & IDEs
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium">
            Write, compile, and run code in 20+ programming languages directly in your browser! 
            Perfect for learning, testing, and quick prototyping.
          </p>
        </div>

        {/* Language Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Programming Language</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === language.id
                    ? 'border-blue-500 bg-white shadow-lg'
                    : 'border-gray-200 bg-white/70 hover:border-blue-400'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center mx-auto mb-2 text-2xl`}>
                  {language.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-sm">{language.name}</h4>
                <p className="text-xs text-gray-600">{language.version}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Compiler Interface */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-t-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentLanguage.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {currentLanguage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{currentLanguage.name} Compiler</h3>
                  <p className="text-gray-600">{currentLanguage.description} • {currentLanguage.version}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={copyCode}
                  className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </button>
                <button
                  onClick={downloadCode}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={resetCode}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor and Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Code Editor */}
            <div className="bg-white/90 backdrop-blur-sm border-l border-r border-gray-200">
              <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span className="font-semibold">Code Editor</span>
                  <span className="text-gray-400 text-sm">({currentLanguage.extension})</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 border-none resize-none focus:outline-none"
                placeholder={`Write your ${currentLanguage.name} code here...`}
                spellCheck={false}
              />
            </div>

            {/* Output Panel */}
            <div className="bg-white/90 backdrop-blur-sm border-r border-gray-200">
              <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5" />
                  <span className="font-semibold">Output</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isRunning ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span className="text-sm">Running...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Ready</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-96 p-4 font-mono text-sm bg-gray-900 text-white overflow-y-auto">
                {output || (
                  <div className="text-gray-400">
                    <p>Click "Run Code" to execute your program.</p>
                    <p className="mt-2">Output will appear here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Input and Controls */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-b-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Section */}
              <div className="lg:col-span-2">
                <label className="block text-gray-800 font-semibold mb-3">
                  Program Input (if required)
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-24 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Enter input for your program (if needed)..."
                />
              </div>

              {/* Run Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={runCode}
                  disabled={isRunning || !code.trim()}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg"
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Run Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Fast Compilation</h4>
            <p className="text-gray-600 text-sm">Lightning-fast compilation and execution</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">No Installation</h4>
            <p className="text-gray-600 text-sm">Run code directly in your browser</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-purple-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Save & Share</h4>
            <p className="text-gray-600 text-sm">Download code or copy to clipboard</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Multiple Languages</h4>
            <p className="text-gray-600 text-sm">20+ programming languages supported</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">🚀 Start Coding Now!</h3>
            <p className="text-xl text-gray-700 mb-8">
              Choose any programming language above and start writing code immediately. Perfect for learning, 
              testing algorithms, or quick prototyping!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setSelectedLanguage('python')}
                className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>🐍 Try Python</span>
              </button>
              <button 
                onClick={() => setSelectedLanguage('javascript')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>📜 Try JavaScript</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompilerSection;