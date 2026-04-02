import os
import re

html_files = [
    "index.html",
    "about.html",
    "gallery.html",
    "impact.html",
    r"projects\lumora.html",
    r"projects\hscc.html",
    r"projects\ecometer.html"
]

header_all_pattern = re.compile(r'<!-- Standard Responsive Header Container -->.*?</nav>\s*</div>', re.DOTALL)
fallback_pattern = re.compile(r'<header.*?</header>', re.DOTALL)

def get_standard_header(file_path, active_page_name):
    is_project_page = "projects\\" in file_path or "projects/" in file_path
    is_index = "index.html" in file_path
    prefix = "../" if is_project_page else ""
    
    bg_class = "bg-transparent text-[#FDFBF9]" if is_index else "bg-[#FFF8F3] text-gray-900 shadow-sm border-b border-[#D7C2B7]"
    
    def get_mobile_link_classes(page):
        base = "block py-3 px-4 font-sans font-bold uppercase text-xs tracking-widest transition-colors rounded-sm"
        if page == active_page_name:
            return f"bg-gray-200 text-gray-900 {base}"
        return f"text-gray-900 hover:bg-gray-100 {base}"
        
    def get_desktop_link_classes(page):
        base = "px-3 py-2 font-sans font-bold uppercase text-xs tracking-widest transition-colors rounded-sm"
        if page == active_page_name:
            return f"{base} bg-gray-100/20"
        return f"{base} hover:bg-gray-100/20"

    return f'''<!-- Standard Responsive Header Container -->
<div class="fixed top-0 left-0 w-full z-50">
  <nav class="{bg_class} transition-colors duration-300">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center relative z-20">
          <a href="{prefix}index.html" class="text-xl md:text-2xl font-header font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
            Michael McKay
          </a>
        </div>
        
        <!-- Desktop Nav -->
        <div class="hidden lg:flex lg:items-center lg:space-x-4 relative z-20">
          <a href="{prefix}impact.html" class="{get_desktop_link_classes('impact')}">My Impact</a>
          <a href="{prefix}gallery.html" class="{get_desktop_link_classes('gallery')}">Nature Gallery</a>
          <a href="{prefix}about.html" class="{get_desktop_link_classes('about')}">About Me</a>
          <a href="{prefix}assets/files/Good Choice.pdf" download="Good Choice.pdf" class="ml-4 btn-primary relative">
            Resume
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center lg:hidden relative z-20">
          <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg id="icon-menu-closed" class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg id="icon-menu-open" class="hidden h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>

    <!-- Mobile Menu, using max-h for accordion animation -->
    <div class="lg:hidden absolute top-20 left-0 w-full bg-[#FFF8F3] shadow-xl border-t border-[#D7C2B7] overflow-hidden max-h-0 transition-all duration-300 ease-in-out" id="mobile-menu">
      <div class="px-6 pt-4 pb-8 space-y-2">
        <a href="{prefix}impact.html" class="{get_mobile_link_classes('impact')}">My Impact</a>
        <a href="{prefix}gallery.html" class="{get_mobile_link_classes('gallery')}">Nature Gallery</a>
        <a href="{prefix}about.html" class="{get_mobile_link_classes('about')}">About Me</a>
        <a href="{prefix}assets/files/Good Choice.pdf" download="Good Choice.pdf" class="btn-primary block w-full text-center mt-6">
          Download Resume
        </a>
      </div>
    </div>
  </nav>
</div>'''

for file_path in html_files:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        page_name = os.path.basename(file_path).replace(".html", "")
        if page_name == "index": page_name = "home"
        
        new_header = get_standard_header(file_path, page_name)
        
        found = False
        if header_all_pattern.search(content):
            new_content = header_all_pattern.sub(new_header, content)
            found = True
        elif fallback_pattern.search(content):
            new_content = fallback_pattern.sub(new_header, content)
            found = True
            
        if found:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Written refined standard header to {file_path}")
        else:
            print(f"Could not find header in {file_path}")
    else:
        print(f"File not found: {file_path}")
