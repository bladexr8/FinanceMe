/* Budget to track Expenses */

import truncate from '../utils/truncate';
import getUniqueId from '../utils/getUniqueId';
import Expense from './Expense';
import Category from '../enums/Category';

class Budget {
    private label: string;
    private limit: number;
    private id: string;
    private category: Category;
    private expenses: Expense[];

    constructor(
        label: string,
        limit: number,
        category: Category,
        expenses: Expense[],
    ) {
        this.updateLabel(label);
        this.updateLimit(limit);
        this.updateCategory(category);

        this.id = getUniqueId();
        this.expenses = expenses;
    }

    getId(): string {
        return this.id;
    }

    getLabel(): string {
        return this.label;
    }

    updateLabel(label: string) {
        this.label = truncate(label, 10);
    }

    getLimit(): number {
        return this.limit;
    }

    updateLimit(limit: number): void {
        this.limit = limit;
    }

    getCategory(): Category {
        return this.category;
    }

    updateCategory(category: Category) {
        this.category = category;
    }

    getExpenses(): Expense[] {
        return this.expenses;
    }

    getExpenseTotal(): number {
        return this
            .getExpenses()
            .reduce((sum, expense) => sum + expense.getAmount(), 0);
    }

    getIsOverLimit(): boolean {
        return this.getExpenseTotal() > this.getLimit();
    }
}

export default Budget;