# Redux
## Motivation:
https://www.smashingmagazine.com/2018/07/redux-designers-guide/
https://learnreact.design/2017/06/08/what-is-react/

## Intro:
Programming with actions
CQS: command-query separation
Actions can be separated into 2 major types: Command / Query

dope quote: "Asking a question should not change the answer"

Command change the state of the system. Doesn’t return value.
Query doesn’t change the state of the system. Always returns value

```
		 ——Commands———>
Dispatcher					State
		<———Queries————
```

## Redux world
Commands are actions
Queries are selectors
```
 	———Actions———>
UI							Store
	<———Selectors———
```
### Redux components
- Action creator: construct actions
- Reducer: take the diff and add it to the store. No logic inside.
- Middleware: action in action out. All logic/side effects.

### Actions in redux can be separated into 3 main types:
- Event: Notify something happened. Can have lots of handlers.
- Command: Do something. One handler. Expects reply.
- Document: Save this data in the store. One handler, no reply.