<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block">
                    <img
                        src="../assets/buefy.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    />
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="Categorii">
                            <b-menu-item active expanded icon="settings" label="Liceu">
                                <b-menu-item v-for="cat in this.categorii" :key="cat" :label="cat" @click.native="moveTo(cat)"> </b-menu-item>
                            </b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      mobile: "reduce",
      reduce: false,
      categorii: []
    };
  },
  mounted() {
        this.$axios.get(`/categorii/dupa_materie/${this.materie.idMaterii}`)
        .then( (res) => {
            this.categorii = res.data.map(r=>r.nume_categorie);
        })
  },
  methods: {
      moveTo: function(cat) {
          this.$router.push('/teste' + '/' + this.materie.nume_materie + '/' + cat)
          }
  },
  props: {
      materie: {
          type: Object
      }
  }
};
</script>

<style lang="scss">
.p-1 {
    border: 1px, 1px, 1px, 1px, gray;
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    float: left;
    min-height: 100%;
    height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
            height: 100%;

        // min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
