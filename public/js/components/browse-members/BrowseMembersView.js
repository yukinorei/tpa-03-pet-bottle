import {
  removeChildren,
  createButton,
  createDiv,
  createH3,
  createImg,
  createP,
} from '../../dom-utils.js';
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
    const child = createDiv();
    child.classList.add('member-profile');
    const imageBox = createDiv();
    imageBox.classList.add('member-image-box');
    const robotThumbEl = createImg();
    robotThumbEl.src = thumbnailUrl;
    const titleName = createH3(title.name);
    const NamePhraseEl = createP(name);
    NamePhraseEl.classList.add('member-name');
    const titleQuote = createH3(title.quote);
    const quotePhraseEl = createP(quote);
    quotePhraseEl.classList.add('member-text');
    const nextButton = createButton(next);
    nextButton.classList.add('btn-next-member');
    nextButton.addEventListener('click', () => {
      handleBrowseNextMember();
    });
    parent.appendChild(child);
    child.appendChild(imageBox);
    imageBox.appendChild(robotThumbEl);
    child.appendChild(titleName);
    child.appendChild(NamePhraseEl);
    child.appendChild(titleQuote);
    child.appendChild(quotePhraseEl);
    child.appendChild(nextButton);
  }
}

export default BrowseMembersView;
