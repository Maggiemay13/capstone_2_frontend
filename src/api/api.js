import axios from "axios";

const BASE_URL = "https://mindfullmoment-backend.onrender.com";

// process.env.BASE_URL || "http://localhost:3001";

/** API Class.
 *

 */

class MindfulMomentApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MindfulMomentApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      // console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Get homepage */
  static async getHomePage() {
    let res = await this.request("");
    return res;
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get journal id . */

  static async getJournalId(username, journalId) {
    let res = await this.request(`users/${username}/journal/${journalId}`);
    return res.journalId;
  }

  // /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "put");
    return res.user;
  }

  // /*Get journal entries

  static async getJournal(username) {
    let res = await this.request(`users/${username}/journal`);
    return res.journal;
  }

  // /*Get journal entries

  static async getJournalDetails(username, id) {
    let res = await this.request(`users/${username}/journal/${id}`);
    return res.journal;
  }
  // /* Add journal entries

  static async addJournal(username, data) {
    let res = await this.request(`users/${username}/journal/add`, data, "post");

    return res.journal;
  }

  // /*Edit journal
  static async editJournal(username, journalIdNum, data) {
    let res = await this.request(
      `users/${username}/journal/${journalIdNum}`,
      data,
      "put"
    );
    return res.journal;
  }
  // /*Delete journal history
  static async deleteJournal(username, journalIdNum) {
    let res = await this.request(
      `users/${username}/journal/${journalIdNum}`,
      {},
      "delete"
    );
    return res.journal;
  }

  static async addActivity(username, data) {
    let res = await this.request(
      `users/${username}/activities/add`,
      data,
      "post"
    );

    return res.journal;
  }

  static async getZenQuote() {
    let res = await this.request("");

    return res;
  }
}

export default MindfulMomentApi;
