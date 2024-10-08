import ValidationError from '../exceptions/validationError.js'

/**
 * Check if a URL has been used before or not.
 * 
 * @param {string} url - Current URL to validate.
 * @param {array} fetchedURLs - List of fetched URLs.
 */

export default function validateUrl(url, fetchedURLs) {

    if (fetchedURLs.includes(url))
        throw new ValidationError(`${url} has already been fetched.`);

    fetchedURLs.push(url);
}