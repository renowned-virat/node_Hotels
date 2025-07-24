```mermaid
flowchart TD
    A[Start] --> B{Condition?}
    B -- Yes --> C[Do Task 1]
    B -- No --> D[Do Task 2]
    C --> E[End]
    D --> E
