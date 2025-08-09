import os
from bs4 import BeautifulSoup
from pathlib import Path

def process_html_content(html_content):
    """Process HTML content according to the specified rules."""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove all images
    for img in soup.find_all('img'):
        img.decompose()
    
    # Remove all <a> tags but keep their text
    for a in soup.find_all('a'):
        a.replace_with(a.text)
    
    # Process the first table's second row cells
    first_table = soup.find('table')
    if first_table:
        rows = first_table.find_all('tr')
        if len(rows) > 1:
            second_row = rows[1]
            cells = second_row.find_all('td')
            if len(cells) >= 3:
                for i, cls in enumerate(['q1', 'q2', 'q3'], 1):
                    if i <= len(cells):
                        cells[i-1]['class'] = cells[i-1].get('class', []) + [cls]
    
    # Remove width="630" from all tables but keep their classes
    for table in soup.find_all('table'):
        if 'width' in table.attrs:
            del table['width']
    
    return str(soup)

def process_markdown_file(file_path, backup=True):
    """Process a single markdown file with HTML content."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create backup if requested
    if backup:
        backup_path = file_path.with_suffix('.md.bak')
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    # Process the content
    processed_content = process_html_content(content)
    
    # Write the processed content back to the file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(processed_content)

def process_all_md_files(directory='.', recursive=False, backup=True):
    """Process all .md files in the specified directory."""
    processed_files = 0
    
    if recursive:
        # Process all .md files recursively
        for root, _, files in os.walk(directory):
            for file in files:
                if file.endswith('.md'):
                    file_path = Path(root) / file
                    process_markdown_file(file_path, backup)
                    processed_files += 1
                    print(f"Processed: {file_path}")
    else:
        # Process only in the current directory
        for file in os.listdir(directory):
            if file.endswith('.md'):
                file_path = Path(directory) / file
                process_markdown_file(file_path, backup)
                processed_files += 1
                print(f"Processed: {file_path}")
    
    print(f"\nProcessing complete. {processed_files} files were processed.")
    if backup:
        print("Original files were backed up with .bak extension.")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Process all .md files to clean HTML content.')
    parser.add_argument('--directory', '-d', default='.', 
                       help='Directory to process (default: current directory)')
    parser.add_argument('--recursive', '-r', action='store_true',
                       help='Process files recursively in subdirectories')
    parser.add_argument('--no-backup', action='store_true',
                       help='Disable creating backup files')
    
    args = parser.parse_args()
    
    process_all_md_files(
        directory=args.directory,
        recursive=args.recursive,
        backup=not args.no_backup
    )