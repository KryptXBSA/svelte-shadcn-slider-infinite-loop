<script lang="ts">
    import type { PageData } from "./$types.js";
    import MyForm from "./my-form.svelte";
    const { data }: { data: PageData } = $props();
    </script>
        
    <MyForm {data} />
    