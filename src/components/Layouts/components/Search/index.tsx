import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, {
  ChangeEvent,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as searchServices from '../../../../apiServices/searchServices';
import { useDebounce } from '../../../../hooks';
import 'tippy.js/dist/tippy.css';
import AccountItem from '../../../AccountItem';
import { SearchIcon, SpinnerIcon } from '../../../Icons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

export interface Result {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tick: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url: string;
  facebook_url: string;
  youtube_url: string;
  twitter_url: string;
  instagram_url: string;
}

const Search = () => {
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      const searchResult = await searchServices.search(debouncedValue);

      setSearchResults(searchResult);
      setLoading(false);
    };
    fetchData();
  }, [debouncedValue]);

  const handleClearInput = () => {
    setSearchValue('');
    const inputElement = inputRef.current as unknown as HTMLInputElement;
    inputElement.focus();
    setSearchResults([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
  };

  return (
    // Using outer <div> to solve Tippy warning
    <div>
      <HeadlessTippy
        interactive={true}
        visible={showResult && searchResults.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResults.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef as unknown as LegacyRef<HTMLInputElement>}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck="false"
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClearInput}>
              <FontAwesomeIcon icon={faCircleXmark as IconProp} />
            </button>
          )}
          {loading && (
            <SpinnerIcon
              className={cx('loading')}
              width="1.6rem"
              height="1.6rem"
            />
          )}
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon width="2.4rem" height="2.4rem" />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
