# Angular library help you to build reactive forms dynamic validation

(Original Source: https://github.com/Yumitoya8569/ng-conditional-validator)

## Quickstart

### Install

```
npm i @outerlimitstech/ngx-conditional-validator
```

### Import

```
import { OltConditionalValidator } from '@outerlimitstech/ngx-conditional-validator';
```

### Running the showcase

**1. Clone the Git repository and install the dependencies**:

```
git clone https://github.com/OuterlimitsTech/olt-ngx-conditional-validator.git
cd olt-ngx-conditional-validator
npm i
```

**2. Build the library**:

```
npm run build-lib
```

**3. Run the Test App**:

```
npm run test-app
```

## Basic Usage

### `when(condition)`

help you build the condition

```typescript
const contactMe = OltConditionalValidator.when(
  (query) => query.selectValue("dontContactMe") === false
);
const contactByEmail = contactMe.when(
  (query) => query.selectValue("contactBy") === "email"
);
```

### `bindUpdate(form)`

binding automatic update for your form state

```typescript
OltConditionalValidator.bindUpdate(this.formDemo1);
```

### `updateTreeValidity(form)`

update your form state

```typescript
OltConditionalValidator.updateTreeValidity(this.formDemo1);
```

### `then(validators)`

if the condition isn't passed, it will not run the given validators

```typescript
buildDemo1() {
    const contactMe = OltConditionalValidator.when(query => query.selectValue('dontContactMe') === false);
    const contactByEmail = contactMe.when(query => query.selectValue('contactBy') === 'email');

    this.formDemo1 = this.fb.group({
        dontContactMe: [false],
        contactBy: ['', contactMe.then(Validators.required)],
        email: ['', contactByEmail.then(Validators.required)]
    });

    OltConditionalValidator.bindUpdate(this.formDemo1);

    console.log(this.formDemo1.value); // { dontContactMe: false, contactBy: '', email: '' }
}
```

### `enable(validators)`

if the condition isn't passed, it will diable the control.
when call form.value it only return enabled control's value.

```typescript
buildDemo3() {
    const contactMe = OltConditionalValidator.when(query => query.selectValue('dontContactMe') === false);
    const contactByEmail = contactMe.when(query => query.selectValue('contactBy') === 'email');

    this.formDemo3 = this.fb.group({
        dontContactMe: [false],
        contactBy: ['', contactMe.enable(Validators.required)],
        email: ['', contactByEmail.enable(Validators.required)]
    });

    OltConditionalValidator.bindUpdate(this.formDemo3);

    console.log(this.formDemo3.value); // { dontContactMe: false }
}
```

### `then(validators, { resetBy: ... })`

if the condition isn't passed, it will not run the given validators and will reset control's value

```typescript
get contactMe5(){ return this.formDemo5?.get('dontContactMe')?.value === false; }
get contactByEmail5(){ return this.formDemo5?.get('contactBy')?.value === 'email'; }

buildDemo5(){
    const contactMe = OltConditionalValidator.when(() => this.contactMe5);
    const contactByEmail = contactMe.when(() => this.contactByEmail5);

    this.formDemo5 = this.fb.group({
        dontContactMe: [false],
        contactBy: ['', contactMe.then(Validators.required, { resetBy: '' })],
        email: ['', contactByEmail.then(Validators.required, { resetBy: '' })]
    });

    OltConditionalValidator.bindUpdate(this.formDemo5);
}
```

### `thenAsync(asyncValidators)`

if the condition isn't passed, it will not run the given async validators

```typescript
buildDemo1() {
    const contactMe = OltConditionalValidator.when(query => query.selectValue('dontContactMe') === false);
    const contactByEmail = contactMe.when(query => query.selectValue('contactBy') === 'email');

    this.formDemo1 = this.fb.group({
        dontContactMe: [false],
        contactBy: ['', contactMe.then(Validators.required)],
        email: ['', {
            updateOn: 'blur',
            asyncValidators: contactByEmail.thenAsync(this.asyncEmailValidator)
        }]
    });

    OltConditionalValidator.bindUpdate(this.formDemo1);
}
```

### `invalid(errMsg)`

a validators always return invalid

```typescript
buildDemo2() {
    const notEqual = OltConditionalValidator.when(query => query.selectValue('password') !== query.selectValue('repeat'));

    this.formDemo2 = this.fb.group({
        password: ['', Validators.required],
        repeat: ['']
    }, {
        validators: notEqual.then(OltConditionalValidator.invalid()) // this line help you check repeat password
    });

    OltConditionalValidator.bindUpdate(this.formDemo2);
}
```
