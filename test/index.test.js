import pkg from './../dist/package.js'

describe('testing here', () => {
	test('expect test to work', () => {
		expect(pkg.msg).toEqual('hello world')
		expect(pkg.msg).toBe('hello world')
	})
})