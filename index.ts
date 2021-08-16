import foo from "foo";
import bar from "./localbar";
//Error: Cannot find module.
//But if we compile ./localbar.ts and place the result in node_modules with a package.json
//that configures it as a CommonJS module, then import from node_modules like
//`import bar from "bar"`, everything goes fine.
foo();
bar();