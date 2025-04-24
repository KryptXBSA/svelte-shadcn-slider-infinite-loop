<script lang="ts">
  import {
    type Infer,
    type SuperValidated,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import * as Form from "$lib/components/ui/form/index.js";
  import { formSchema, type FormSchema } from "./schema";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  
  
  
  const { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } =
    $props();
  
  const form = superForm(data.form, {
    validators: zodClient(formSchema),
  });
  
  const { form: formData, enhance } = form;
  
  
  
  </script>
  <form class="space-y-4 mx-auto max-w-3xl p-8" method="post" use:enhance>
          
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
          
   <Form.Field {form} name="key_2a674a">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>My number</Form.Label>
          <Slider {...props} type="single" bind:value={$formData["key_2a674a"] } max={100} step={1} class="max-w-[70%]" />
        {/snippet}
      </Form.Control>
      <Form.Description>Description</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
  
    
  <!-- commented this field because the page goes blank     -->
  <!-- <Form.Field
      {form}
      name="key_11deb6"
      class="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
    >
      <Form.Control>
        {#snippet children({ props })}
          <Checkbox {...props} bind:checked={$formData["key_11deb6"]} />
          <div class="space-y-1 leading-none">
            <Form.Label>My boolean</Form.Label>
            <Form.Description>
              Description
            </Form.Description>
          </div>
        {/snippet}
      </Form.Control>
    </Form.Field> -->
  
          
      </div>
      
        <Form.Button>Submit</Form.Button>
  </form>
  