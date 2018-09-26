import { removeChildren } from '../../dom-utils.js';
import { title, next } from './constants.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();

    const parent = document.getElementById('container');
    const child = document.createElement('DIV');
    child.classList.add('member-profile');
    const imageBox = document.createElement('class');
    imageBox.classList.add('member-image-box');
    const robotThumbEl = document.createElement('IMG');
    robotThumbEl.src = thumbnailUrl;
    const nameTitle = document.createElement('H3');
    nameTitle.innerHTML = title.name;
    const NamePhraseEl = document.createElement('P');
    NamePhraseEl.classList.add('member-name');
    NamePhraseEl.innerHTML = name;
    const quoteTitle = document.createElement('H3');
    quoteTitle.innerHTML = title.quote;
    const quotePhraseEl = document.createElement('P');
    quotePhraseEl.classList.add('member-text');
    quotePhraseEl.innerHTML = quote;
    const nextButton = document.createElement('button');
    nextButton.classList.add('btn-next-member');
    nextButton.addEventListener('click', () => {
      handleBrowseNextMember();
    });
    nextButton.innerHTML = next;
    parent.appendChild(child);
    child.appendChild(imageBox);
    imageBox.appendChild(robotThumbEl);
    child.appendChild(nameTitle);
    child.appendChild(NamePhraseEl);
    child.appendChild(quoteTitle);
    child.appendChild(quotePhraseEl);
    child.appendChild(nextButton);
  }
}

export default BrowseMembersView;
