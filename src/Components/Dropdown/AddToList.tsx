
import * as React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { Wrapper, ActivatorButton, DropdownList } from './AddToList.style';

interface DropDownItem {
  id: number;
  url: string;
  text: string;
}

interface Props {
  activatorText?: string;
  items?: DropDownItem[];
}

const dropdownItems = [
  {
    id: 1,
    // onClick event to add to list goes here. Not sure if we want to import Props here from HomeCard or do some refactoring.
    url: 'linkHere1',
    text: 'Gotta Go!'
  },
  {
    id: 2,
    url: 'linkHere2',
    text: 'Loved It!'
  },
  {
    // let's revisit how to make this dynamic
    id: 3,
    url: 'linkHere3',
    text: 'Generic List'
  }
];

const Dropdown = ({
  activatorText = 'Add To List',
  items = dropdownItems
}: Props) => {
  const activatorRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if (isOpen) {
      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowDown':
          const nodeList = listRef.current!.querySelectorAll('a');
          if (activeIndex === items.length - 1) return;
          nodeList[activeIndex + 1].focus();
          break;
        case 'ArrowUp':
          const nodeList2 = listRef.current!.querySelectorAll('a');
          if (activeIndex === 0) return;
          nodeList2[activeIndex - 1].focus();
          break;
      }
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      listRef.current!.contains(event.target) ||
      activatorRef.current!.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      listRef.current!.querySelector('a')!.focus();
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  const focusHandler = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Wrapper onKeyUp={keyHandler}>
      <ActivatorButton
        aria-haspopup='true'
        aria-controls='dropdown1'
        onClick={handleClick}
        ref={activatorRef}
        onFocus={() => setActiveIndex(-1)}
      >
        {activatorText}
      </ActivatorButton>
      <DropdownList id='dropdown1' ref={listRef} active={isOpen} role='list'>
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={item.url} onFocus={() => focusHandler(index)}>
              {item.text}
            </a>
          </li>
        ))}
      </DropdownList>
    </Wrapper>
  );
};

export default Dropdown;

