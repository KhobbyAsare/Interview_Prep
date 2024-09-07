# Abstract Class:

# Can have both abstract and concrete methods.
# Abstract methods are declared without an implementation.
# Can have constructors.
# Supports inheritance (a class can extend another class).
# A class can extend only one abstract class.

## Interface:

# Can only have abstract methods (methods without a body) in languages like Java before Java 8. Starting from Java 8, interfaces can have default and static methods with a body.
# Cannot have constructors.
# Supports multiple inheritance (a class can implement multiple interfaces).
# Used to define a contract for classes without enforcing a particular implementation.


## Use Cases for Abstract Classes:

# Shared Base Functionality: When multiple classes share common functionality, but you also want to enforce a certain structure or behavior in subclasses.

    abstract class Animal {
        // Abstract method
        abstract makeSound(): void;

        // Concrete method
        eat(): void {
            console.log("This animal eats food.");
        }
    }

    class Dog extends Animal {
        makeSound(): void {
            console.log("Bark");
        }
    }

# Partial Implementation: If you're designing a large system where you want to provide a common base class with default method implementations that subclasses can override or extend.

abstract class Vehicle {
    abstract getMaxSpeed(): number;

    // Concrete method
    start(): void {
        console.log("Vehicle starts.");
    }
}

class Car extends Vehicle {
    getMaxSpeed(): number {
        return 150;
    }
}

# Control Over Inheritance: When you want to restrict a class to be subclassed only by certain classes. Abstract classes can use protected members accessible only to subclasses.
abstract class BaseModule {
    protected abstract initialize(): void;

    protected commonMethod(): void {
        console.log("Common functionality");
    }
}

class UserModule extends BaseModule {
    protected initialize(): void {
        console.log("User Module Initialization");
    }
}

# State or Field Inheritance: Abstract classes can have fields (state), allowing subclasses to inherit and use these fields directly.
abstract class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    abstract work(): void;
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

## Use Cases for Interfaces:

# Multiple Inheritance: When a class needs to inherit behavior from multiple sources. Interfaces allow a class to implement multiple interfaces, thus inheriting the behavior of all.
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {
    fly(): void {
        console.log("Duck flies.");
    }

    swim(): void {
        console.log("Duck swims.");
    }
}

# Decoupling: Interfaces are great for decoupling the code from specific implementations, making it easier to change the implementation without changing the code that uses it.
interface PaymentProcessor {
    processPayment(amount: number): void;
}

class PaypalPaymentProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment through PayPal: $${amount}`);
    }
}

class CreditCardPaymentProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment through Credit Card: $${amount}`);
    }
}

# Standardization: When you want to enforce a certain interface across multiple classes. Interfaces ensure that all classes implement the same methods, making it easier to use them interchangeably.
interface DataExporter {
    exportData(): void;
}

class CSVExporter implements DataExporter {
    exportData(): void {
        console.log("Exporting data to CSV file.");
    }
}

class PDFExporter implements DataExporter {
    exportData(): void {
        console.log("Exporting data to PDF file.");
    }
}

# Plug-in Architectures: Interfaces are ideal for creating systems that are extensible through plug-ins. New plug-ins implement the interface and can be dynamically discovered and used by the system.
interface Plugin {
    execute(): void;
}

class LoggingPlugin implements Plugin {
    execute(): void {
        console.log("Logging action executed.");
    }
}

class AuthenticationPlugin implements Plugin {
    execute(): void {
        console.log("Authentication action executed.");
    }
}



# The excerpt provided discusses interfaces and abstract classes, highlighting their characteristics and use cases. When comparing abstract classes to interfaces, or considering why one might prefer abstract classes over traditional inheritance (using concrete classes), several points emerge from the context of the excerpt and general software design principles:

# *Shared Base Functionality: Abstract classes are preferred when there's a need to share base functionality (concrete methods) among multiple classes. Unlike interfaces (before Java 8, where default methods were introduced), abstract classes allow you to define non-static methods with implementations. This means you can have a method that does something by default, which subclasses can inherit or override.

# *State or Field Inheritance: Abstract classes can have fields (state), which can be inherited by subclasses. This is useful when you want multiple classes to not just share behavior (methods) but also state (fields). Interfaces cannot hold state.

# *Partial Implementation: Abstract classes can provide a partial implementation of the class. This means that an abstract class can have fully implemented methods alongside abstract methods. This is particularly useful when implementing a large portion of your class's functionality is beneficial and you want to leave only a part of the implementation to be defined by subclasses.

# *Control Over Inheritance: Abstract classes provide more control over inheritance. Since a class can extend only one abstract class, it allows for a more controlled inheritance structure. This can be useful when you want to ensure a certain hierarchy or when you want to prevent a class from being a subclass of multiple base classes, which can lead to more complex and difficult-to-manage codebases.

# *Constructor Definitions: Abstract classes can have constructors. This is useful for enforcing certain conditions or initializing states before an instance of a subclass is created. Interfaces do not support constructors.

# In summary, abstract classes are preferred over traditional inheritance when there's a need to share both state and behavior among subclasses, when partial implementations are beneficial, when you want to enforce a specific inheritance hierarchy, or when you need to initialize state through constructors.