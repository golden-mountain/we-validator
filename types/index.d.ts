declare module "we-validator" {
    type Rule = Function | RegExp;
    type RuleOption = { rule: Rule; message: string };
    type Options = { 
      rules: object,
      messages: object,
      onMessage?: Function,
      multiple?: boolean
    }
    class WeValidator {
      constructor(options: Options);
      static RULES: object;
      static addRule(ruleName: string, ruleOption: RuleOption): void;
      static checkValue(ruleName: string, value: string, param: any, skip: boolean): void;
      options: Options;
      required: Function;
      checkData(data: object, onMessage?: Function, showMessage?: boolean, fieldMap?: object): void;
      checkFields(data: object, onMessage?: Function, showMessage?: boolean): void;
      isValid(data: object, fields: Array<string>): boolean;
      addRules(options: Options): void;
      removeRules(fields: Array<string>): void;
    }
    export = WeValidator
  }
  