const config = {
    stories: ["…./src/**/*.md×", ".. /src/components/**/*.stories.@(js|jsx|ts|ts×)"], 
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: { 
        name: "@storybook/react-webpack5",
        options: {},
     },
     docs: {
        autodocs: "tag",
     },
    
    };
    
    export default config;
