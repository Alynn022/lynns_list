
import * as React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { Wrapper, ActivatorButton, DropdownList } from './AddToList.style';

interface IDropdownItem {
  id: number;
  url: string;
  text: string;
}

interface IProps {
  activatorText?: string;
  items?: IDropdownItem[];
}

const dropdownItems = [
  {
    id: 1,
    url: 'myLink',
    text: 'option'
  },
  {
    id: 2,
    url: 'myLink2',
    text: 'option2'
  },
  {
    id: 3,
    url: 'myLink3',
    text: 'option3'
  },
  {
    id: 4,
    url: 'myLink4',
    text: 'option4'
  }
];

const Dropdown = ({
  activatorText = 'Add To List',
  items = dropdownItems
}: IProps) => {
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

