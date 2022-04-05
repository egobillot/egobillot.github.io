import type { ResumeStyles } from "../../types";

const state = {
  marginV: 35,
  marginH: 45,
  themeColor: "#377bb5",
  mdContent: ""
} as ResumeStyles;

const mutations = {
  __set<T extends keyof ResumeStyles>(
    state: ResumeStyles,
    msg: { key: T; val: ResumeStyles[T] }
  ): void {
    state[msg.key] = msg.val;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};