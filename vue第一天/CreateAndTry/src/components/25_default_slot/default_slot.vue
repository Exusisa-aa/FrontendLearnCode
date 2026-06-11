<template>
  <div class="alert-box">
    <div class="alert-overlay" @click="closeOnClickOverlay ? close() : null"></div>
    <div class="alert-modal" :class="`alert-${type}`">
      <div class="alert-header">
        <h3>{{ title }}</h3>
        <button class="alert-close" @click="close" v-if="showClose">&times;</button>
      </div>
      <div class="alert-body">
        <!-- 默认插槽 -->
        <slot>
          默认插槽,尚未填入内容
        </slot>
      </div>
      <div class="alert-footer" v-if="showConfirmButton || showCancelButton">
        <button 
          v-if="showCancelButton" 
          class="alert-btn alert-btn-cancel" 
          @click="cancel"
        >
          {{ cancelButtonText }}
        </button>
        <button 
          v-if="showConfirmButton" 
          class="alert-btn alert-btn-confirm" 
          @click="confirm"
        >
          {{ confirmButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义组件属性
const props = defineProps({
  title: {
    type: String,
    default: '提示'
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info', // info, success, warning, error
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  showClose: {
    type: Boolean,
    default: true
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: false
  },
  confirmButtonText: {
    type: String,
    default: '确定'
  },
  cancelButtonText: {
    type: String,
    default: '取消'
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})


</script>

<style scoped>
.alert-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.alert-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.alert-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.alert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.alert-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.alert-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert-body {
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
}

.alert-footer {
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px;
  border-top: 1px solid #eee;
  gap: 10px;
}

.alert-btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  font-size: 14px;
}

.alert-btn-confirm {
  background-color: #409eff;
  color: white;
  border-color: #409eff;
}

.alert-btn-cancel {
  background-color: #fff;
  color: #606266;
}

.alert-success {
  border-top: 4px solid #67c23a;
}

.alert-warning {
  border-top: 4px solid #e6a23c;
}

.alert-error {
  border-top: 4px solid #f56c6c;
}

.alert-info {
  border-top: 4px solid #409eff;
}
</style>