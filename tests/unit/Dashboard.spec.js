import { mount } from '@vue/test-utils';
import Dashboard from '@/components/Dashboard.vue';

describe('Dashboard.vue', () => {
  const wrapper = mount(Dashboard);

  it('Has header', () => {
    expect(wrapper.html()).toContain('<h1>Dashboard</h1>');
  });
});
