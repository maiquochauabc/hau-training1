<template>
<div>
  <p>Category</p>
 <nav>
      <ul class="menu__list">       
        <li class="menu__item">
        <router-link  class="menu__link"  :to="{name: 'ChildCategory', params: {id: 1}}">Category 1</router-link>
        </li>            
        <li class="menu__item">
        <router-link  class="menu__link"  :to="{name: 'ChildCategory', params: {id: 2}}">Category 2</router-link>
        </li>            
        <li class="menu__item">
        <router-link  class="menu__link"  :to="{name: 'ChildCategory', params: {id: 3}}">Category 3</router-link>
        </li>            

      </ul>
    </nav>
 <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'Category'
}
</script>

<style scope>
p {
  font-size: 2rem;
}
</style>