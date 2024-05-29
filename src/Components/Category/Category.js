import React from 'react'
import { categoryInfo } from './categoryInfo'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
    return (
        <section className={classes.category_container}>
            {
                categoryInfo.map((info, i) => (
                    <CategoryCard data={info} key={i} />
            ))
            }
        </section>
    )
}

export default Category