const STRINGS = {
    useState: {
        title: "useState",
        description: "The useState() hook:\n" +
            "\n" +
            "    Allows us to obtain a state variable, this is a special variable that is capable of retaining data between renders.\n" +
            "    Provides us with a setter function to update the state variable and hence trigger a re-render of our component."
    },
    useCallback: {
        title: "useCallback",
        description: "useCallback is a React Hook that lets you cache a function definition between re-renders.\n" +
            "\n" +
            "const cachedFn = useCallback(fn, dependencies)"
    },
    useEffect: {
        title: "useEffect",
        description: "useEffect is a React Hook that lets you synchronize a component with an external system.\n" +
            "\n" +
            "useEffect(setup, dependencies?)"
    }
}

export default STRINGS;