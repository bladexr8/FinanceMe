/* utility function to generate 
   a unique id for an expense */

function getUniqueId(): string {
    // convert num to base 36 and stringify
    const dateStr = Date.now().toString(36);

    const randomStr = Math.random().toString(36).substring(2,8);

    return `${dateStr}-${randomStr}`;
}

export default getUniqueId;