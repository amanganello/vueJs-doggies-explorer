// DoggiesSearch.spec.js
import DoggiesSearch from '../doggiesExplorer/DoggiesSearch.vue';
import { describe, expect, test } from 'vitest';
import { mount } from "@vue/test-utils";
import { render, fireEvent } from '@testing-library/vue';

const wrapper = mount(DoggiesSearch, {
    props: {
      isLoading: false,
      connected: true,
    },
  });

describe('DoggiesSearch', () => {
  test('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('emits "get-token-data" event on form submission', async () => {
    await wrapper.setData({ tokenId: '123' });
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted()['get-token-data'][0]).toEqual(['123']);
  });

  test('emits "connect-wallet" event on button click', async () => {
    const wrapperConnect = mount(DoggiesSearch, {
      props: {
        isLoading: false,
        connected: false,
      },
    });

    await wrapperConnect.find('.regular_button.search_btn').trigger('click');

    expect(wrapperConnect.emitted()['connect-wallet']).toBeTruthy();
  });

  test('emits "get-token-data" event on form submission', async () => {
    const { getByPlaceholderText, getByText, emitted } = render(DoggiesSearch, {
      props: {
        isLoading: false,
        connected: true,
      },
    });

    await fireEvent.update(getByPlaceholderText('Token ID'), 123);
    await fireEvent.submit(getByText('Search'));

    expect(emitted()['get-token-data'][0]).toEqual([123]);
  });

  test('emits "search-random-doggie" event on "Search Random" button click', async () => {
    const { getByText, emitted } = render(DoggiesSearch, {
      props: {
        isLoading: false,
        connected: true,
      },
    });

    await fireEvent.click(getByText('Search Random'));
    expect(emitted()['search-random-doggie']).toBeTruthy();
  });

  test('emits "connect-wallet" event on "Connect wallet" button click', async () => {
    const { getByText, emitted } = render(DoggiesSearch, {
      props: {
        isLoading: false,
        connected: false,
      },
    });

    await fireEvent.click(getByText('Connect wallet'));
    expect(emitted()['connect-wallet']).toBeTruthy();
  });
});
