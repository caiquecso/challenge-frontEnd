<template>
  <div class="w-full px-4 flex flex-col lg:flex-row lg:px-8">
    <div class="hidden lg:block w-[220px]">
      <slot name="sidebar" />
    </div>
    <div class="pl-0 flex-1 lg:pl-8">
      <slot />
    </div>
  </div>
</template>
