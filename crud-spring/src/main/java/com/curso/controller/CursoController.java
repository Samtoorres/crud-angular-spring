package com.curso.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curso.model.Curso;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

	@GetMapping
	public List<Curso> list() {
		return null;
	}
}
