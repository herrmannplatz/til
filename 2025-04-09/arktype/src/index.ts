import { type } from "arktype"

const Device = type({
	platform: "'android' | 'ios'",
	"versions?": "(number | string)[]"
})

const User = type({
	name: "string",
	device: Device
})

// extract the type if needed
type User = typeof User.infer

const out = User({
	name: "Alan Turing",
	device: {
		platform: "enigma",
		versions: [0, "1", 0n]
	}
})
if (out instanceof type.errors) {
	// hover out.summary to see validation errors
	console.error(out.summary)
} else {
	// hover out to see your validated data
	console.log(`Hello, ${out.name}`)
}