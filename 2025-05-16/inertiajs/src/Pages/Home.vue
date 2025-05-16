<script setup>
import { Head , Link } from '@inertiajs/vue3'

defineProps({ msg: String })
</script>

<template>
  <main>
    <Head title="Welcome" />
    <h1>Welcome</h1>
    {{ msg }}
    <Link href="/settings">Settings</Link>
  </main>
</template>