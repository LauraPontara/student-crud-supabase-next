import { supabase } from "@/lib/supabase";
import { Student } from "@/app/page";

export async function POST(request: Request) {
  // 1. Extrair dados do body da requisição
  // 2. Validar os dados
  // 3. Inserir no Supabase
  // 4. Retornar resposta

  // body terá os dados do formulario
  const body = await request.json();

  const { error } = await supabase.from("students").insert([body]);

  if (error) {
    return Response.json(
      { error: `Something went wrong: ${error.message}` },
      { status: 500 }
    );
  } else {
    return Response.json({ message: "Student created" }, { status: 201 });
  }
}

export async function GET() {
  // 4. Retornar resposta

  const { data, error } = await supabase.from<Student>("students").select("*");

  if (error) {
    return Response.json(
      { error: `Something went wrong: ${error.message}` },
      { status: 500 }
    );
  } else {
    return Response.json(data, { status: 200 });
  }
}

export async function PUT(request: Request) {
  // 1. Extrair dados do body da requisição
  // 2. Validar os dados
  // 3. Inserir no Supabase
  // 4. Retornar resposta

  const url = new URL(request.url);
  const studentId = url.searchParams.get("id");

  // body terá os dados do formulario
  const body = await request.json();

  const { error } = await supabase
    .from<Student>("students")
    .update(body)
    .eq("id", studentId);

  if (error) {
    return Response.json(
      { error: `Something went wrong: ${error.message}` },
      { status: 500 }
    );
  } else {
    return Response.json({ message: "Student updated" }, { status: 200 });
  }
}

export async function DELETE(request: Request) {
    //Extrai id da url
    //Deletar
  // 4. Retornar resposta

  const url = new URL(request.url)
  const studentId = url.searchParams.get("id")

  const { error } = await supabase
    .from<Student>("students")
    .delete()
    .eq("id", studentId);

  if (error) {
    return Response.json(
      { error: `Something went wrong: ${error.message}` },
      { status: 500 }
    );
  } else {
    return Response.json({ message: "Student deleted" }, { status: 200 });
  }
}
