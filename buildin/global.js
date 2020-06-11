var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

if (!g && typeof window === "object") {
	g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;
