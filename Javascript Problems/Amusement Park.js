// https://exercism.org/tracks/javascript/exercises/amusement-park

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
    let information = {'name': name, 'age': age, 'ticketId': ticketId};
    return information;
}
  
  /**
   * Revokes a ticket for a visitor.
   *
   * @param {Visitor} visitor the visitor with an active ticket
   * @returns {Visitor} the visitor without a ticket
   */
function revokeTicket(visitor) {
    visitor['ticketId'] = null;
    return visitor;
}
  
  /**
   * Determines the status a ticket has in the ticket tracking object.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
function ticketStatus(tickets, ticketId) {
    if (Object.hasOwn(tickets, ticketId) === true) {
        if (tickets['ticketID'] === null) {
            return 'not sold';
        } else {
            return `sold to ${tickets['ticketID']}`;
        }
    } else {
        return 'unknown ticket id';
    }
}
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

console.log(tickets['0H2AZ123'] === null)
console.log(ticketStatus(tickets, '0H2AZ123'));
  /**
   * Determines the status a ticket has in the ticket tracking object
   * and returns a simplified status message.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
function simpleTicketStatus(tickets, ticketId) {
    throw new Error('Please implement the simpleTicketStatus function.');
}
  
  /**
   * Determines the version of the GTC that was signed by the visitor.
   *
   * @param {VisitorWithGtc} visitor
   * @returns {string | undefined} version
   */
function gtcVersion(visitor) {
    throw new Error('Please implement the gtcVersion function.');
}
  