<template>
  <teleport to="body">
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <slot></slot>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['isVisible'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
