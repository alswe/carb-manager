import { mount } from "@vue/test-utils"
import StarRating from "../../src/components/StarRating"

describe("StarRating.vue", () => {
  it("displays 3 'full' type of stars, 1 'half' type of star, and 1 'empty' type of star for score 3.6", () => {
    const wrapper = mount(StarRating, {
      propsData: {
        score: 3.6
      }
    });
    expect(wrapper.findAll('img.star-full').length).toBe(3);
    expect(wrapper.findAll('img.star-half').length).toBe(1);
    expect(wrapper.findAll('img.star-empty').length).toBe(1);
  });

  it("displays 5 'empty' type of stars for score 0.2", () => {
    const wrapper = mount(StarRating, {
      propsData: {
        score: 0
      }
    });
    expect(wrapper.findAll('img.star-empty').length).toBe(5);
  });

  it("displays 5 'full' type of stars for score 4.8", () => {
    const wrapper = mount(StarRating, {
      propsData: {
        score: 4.8
      }
    });
    expect(wrapper.findAll('img.star-full').length).toBe(5);
  });
});
