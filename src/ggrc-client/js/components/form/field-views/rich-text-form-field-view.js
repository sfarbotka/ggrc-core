/*
 Copyright (C) 2019 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

import template from './rich-text-form-field-view.stache';

export default can.Component.extend({
  tag: 'rich-text-form-field-view',
  view: can.stache(template),
  leakScope: true,
  viewModel: can.Map.extend({
    value: null,
    disabled: false,
  }),
});
