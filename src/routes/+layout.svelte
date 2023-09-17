<script>
  import '../app.css';

  import 'material-icons/iconfont/material-icons.css';

  import { register } from 'swiper/element/bundle';

  register();
</script>

<div class="flex flex-col items-center">
  <div class="w-3/4 max-w-2xl">
    <slot />
  </div>
</div>
