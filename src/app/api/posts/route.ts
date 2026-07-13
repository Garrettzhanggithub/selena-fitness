import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, frontmatter } = body;

    if (!slug || !frontmatter) {
      return NextResponse.json({ error: "Missing slug or frontmatter" }, { status: 400 });
    }

    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    const filePath = path.join(postsDirectory, `${slug}.md`);

    // Check if slug already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json({ error: `Article "${slug}" already exists` }, { status: 409 });
    }

    // Write file
    fs.writeFileSync(filePath, frontmatter, "utf8");

    return NextResponse.json({ success: true, slug }, { status: 201 });
  } catch (error) {
    console.error("Error saving post:", error);
    return NextResponse.json({ error: "Failed to save article" }, { status: 500 });
  }
}
