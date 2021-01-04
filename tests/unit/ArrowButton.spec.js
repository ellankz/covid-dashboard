import { shallowMount } from '@vue/test-utils';
import ArrowButton from '../../src/components/ArrowButton/ArrowButton.vue';

describe('ArrowButton', () => {
  it('отрисовывает сообщение и правильно реагирует на пользовательский ввод', () => {
    const wrapper = shallowMount(ArrowButton, {
      data() {
        return {
          options: ['Total', 'Per 100k'],
          currentOption: 'Total',
        };
      },
    });

    expect(wrapper.text()).toEqual('Total');
  });
});
