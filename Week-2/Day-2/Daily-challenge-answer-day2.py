import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        # If items is None → make it an empty list
        self.items = items if items is not None else []

        # Store page size
        self.page_size = page_size

        # Current page index (0 means first page)
        self.current_idx = 0

        # Total number of pages (example: 26 letters with page size 4 → 7 pages)
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    # Step 3: return items on the current page
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Step 4: Navigation methods

    def go_to_page(self, page_num):
        # User inputs page numbers starting at 1
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range")
        self.current_idx = page_num - 1  # convert to 0-based index
        return self  # allow chaining

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # BONUS: Pretty printing
    def __str__(self):
        items = self.get_visible_items()
        return "\n".join(str(i) for i in items)

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())     
p.next_page()
print(p.get_visible_items())
p.last_page()
print(p.get_visible_items())

 # YOU WILL SEE OUTPUT NOW