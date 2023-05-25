const formatPrice = (price, isYearly) => isYearly ? `$${price}/yr` : `$${price}/mo`;

const hyphenate = (string) => string.toLowerCase().split(' ').join('-');

export { formatPrice, hyphenate };